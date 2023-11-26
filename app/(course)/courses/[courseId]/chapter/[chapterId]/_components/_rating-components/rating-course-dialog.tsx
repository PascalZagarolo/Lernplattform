'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


import { Star } from "lucide-react";

const RatingDialog = () => {

    const starWrapper = document.querySelector(".stars");
    const stars = document.querySelector(".stars a");

    const onClick = (rating : number) => {

        console.log(rating);
    }
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="ghost">
                    <Star className="h-4 w-4 mr-2" />
                    Kurs bewerten
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Gebe diesem Kurs eine Bewertung!
                    </DialogTitle>
                    <p className="text-gray-800/80 text-sm"> Bewertungen sind für den Kurs-Ersteller sichtbar.</p>
                </DialogHeader>
                <div>
                    <div>
                        <div className="stars text-2xl">
                            <a type="star"><button type="button" onClick={() => {onClick(1)}}>⭐</button></a>
                            <a type="star"><button type="button" onClick={() => {onClick(2)}}>⭐</button></a>
                            <a type="star"><button type="button" onClick={() => {onClick(3)}}>⭐</button></a>
                            <a type="star"><button type="button" onClick={() => {onClick(4)}}>⭐</button></a>
                            <a type="star"><button type="button" onClick={() => {onClick(5)}}>⭐</button></a>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default RatingDialog;