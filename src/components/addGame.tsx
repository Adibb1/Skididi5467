import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import { toast } from "react-toastify"
import { Game } from "../interfaces/games"
import { addGame } from "../utils/games"

export default function AddGame() {
    const [formData, setFormData] = useState({} as Game);
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast("Adding game...")

        const res = await addGame(formData);
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
                        + Add Game
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add a game</DialogTitle>
                        <DialogDescription>
                            Customize the game title, add a unique value (identifier) and an optional description and you're all set!
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" required onChange={handleChange} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="value">Value</Label>
                            <Input id="value" name="value" required onChange={handleChange} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" required onChange={handleChange} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => (setDialogOpen(false))}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" onClick={handleSubmit}>Add game</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}