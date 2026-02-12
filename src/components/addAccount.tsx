import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { addGameAccount } from "../utils/gameAccount"
import { GameAccountInfo } from "../interfaces/gameAccount"
import { Game } from "../interfaces/games"
import { allGames } from "../utils/games"

export default function AddAccount() {
    const [formData, setFormData] = useState({} as GameAccountInfo);
    const [dialogOpen, setDialogOpen] = useState(false)
    const [games, setGames] = useState([] as Game[])

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = async () => {
        const tempGames = await allGames() as Game[];
        setGames(tempGames)
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast("Adding game account..")

        const res = await addGameAccount(formData);
        if (res.status < 400) {
            toast.success(res.msg)
            setDialogOpen(false)
        } else {
            toast.error(res.error.message);
            return
        }
    };
    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <form>
                <DialogTrigger asChild>
                    <button className="cursor-pointer flex-1 bg-black text-white p-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                        + Add Account
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add a game account</DialogTitle>
                        <DialogDescription>
                            Be it a PUBG, Genshin Impact, Mobile Legends game account, add it and put it for sale!
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Game</Label>
                            <Select required onValueChange={(value) => setFormData({
                                ...formData,
                                "game": value
                            })}>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Select a game" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Games</SelectLabel>
                                        {games.map((game, index) => (
                                            <SelectItem value={game.value} key={`game${index}`}>{game.title}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" required onChange={handleChange} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" required onChange={handleChange} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="price">Price</Label>
                            <Input id="price" name="price" required onChange={handleChange} />
                        </div>
                        {/* <div className="grid gap-3">
                            <Label htmlFor="image">Image</Label>
                            <Input id="image" name="image" required />
                        </div> */}
                        <div className="grid gap-3">
                            <Label htmlFor="level">Level</Label>
                            <Input id="level" name="level" required onChange={handleChange} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="rank">Rank</Label>
                            <Input id="rank" name="rank" required onChange={handleChange} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => (setDialogOpen(false))}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" onClick={handleSubmit}>Add account</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}