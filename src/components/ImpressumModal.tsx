import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ImpressumModal({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[800px] w-full max-h-[80vh]">
                <DialogHeader>
                    <DialogTitle>Impressum</DialogTitle>
                    <DialogDescription>
                        Angaben gemäß § 5 TMG
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4 text-sm text-neutral-600 space-y-4">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-neutral-900">Kontakt</h3>
                            <p>Lena Weber<br />
                                Musterstraße 123<br />
                                12345 Berlin</p>
                        </div>

                        <div>
                            <p><strong>Telefon:</strong> +49 (0) 123 44 55 66<br />
                                <strong>E-Mail:</strong> info@lenaweber.de</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-neutral-900 mt-4">Redaktionell verantwortlich</h3>
                            <p>Lena Weber<br />
                                Musterstraße 123<br />
                                12345 Berlin</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-neutral-900 mt-4">EU-Streitschlichtung</h3>
                            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-neutral-900 mt-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                        </div>

                        <div className="text-xs text-neutral-400 mt-8">
                            Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">e-recht24.de</a>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}