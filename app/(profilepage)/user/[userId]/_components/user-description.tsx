'use client';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PencilIcon, Terminal, User } from "lucide-react";
import UserInformation from "./user-information";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { DialogTitle } from "@radix-ui/react-dialog";

interface UserDescriptionProps {
    isOwnSite : boolean;
}

const UserDescription: React.FC<UserDescriptionProps> = ({
    isOwnSite
}) => {


    const formSchema = z.object({
        description : z.string().min(1, {
            message : "Beschreibung ist zu kurz"
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            description : ""
        }
    })

    const { isSubmitting, isValid } = form.formState;

    const [isEditing, setIsEditing] = useState(false);

    const onClick = () => {
        setIsEditing(!isEditing)
        console.log(isEditing)
    }
    

    const onSubmit = () => {
        //..
    }

    return (
        <div>
            <h3 className="flex text-2xl font-semibold justify-start items-center mb-2">
                <p className="text-blue-800">Ü</p>ber mich
                {isOwnSite && (
                    <div>
                        <Button variant="ghost" onClick={onClick}>
                        <PencilIcon className=" h-4 w-4 items-center" />
                        </Button>
                    </div>
                )}
            </h3>
            <Dialog open={isEditing} onOpenChange={onClick}>
                <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                <div className="font-semibold text-lg flex justify-start "><User className="mr-4 text-blue-800"/>Profilbeschreibung ändern</div>
                            </DialogTitle>
                            <p className="text-sm text-gray-800/80"> teile Informationen über dich mit anderen Nutzern auf der ganzen Welt. </p>
                            
                        </DialogHeader>

                        <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        <FormField 
                        control = {form.control}
                        name="description"
                        render = {({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                    disabled={isSubmitting}
                                    placeholder="Erzähle etwas über dich und deine Persönlichkeit ... "
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="flex items-center gap-x-2">
                            <Button disabled={!isValid || isSubmitting} type="submit">
                                Beschreibung speichern
                            </Button>
                        </div>
                    </form>
                </Form>

                </DialogContent>
            </Dialog>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
            <div>
                Dieser Nutzer hat noch keinen Text über sich geteilt.
            </div>
        </div>
    );
}

export default UserDescription;