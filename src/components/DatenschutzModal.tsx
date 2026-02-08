import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function DatenschutzModal({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[800px] w-full max-h-[80vh]">
                <DialogHeader>
                    <DialogTitle>Datenschutzerklärung</DialogTitle>
                    <DialogDescription>
                        Stand: Februar 2026
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4 text-sm text-neutral-600">
                    <div className="space-y-4">
                        <h3 className="font-bold text-neutral-900 text-base">1. Datenschutz auf einen Blick</h3>
                        <h4 className="font-bold text-neutral-900">Allgemeine Hinweise</h4>
                        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

                        <h4 className="font-bold text-neutral-900 mt-4">Datenerfassung auf dieser Website</h4>
                        <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

                        <p><strong>Wie erfassen wir Ihre Daten?</strong><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. per E-Mail). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. technische Daten wie Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                        <h3 className="font-bold text-neutral-900 text-base mt-6">2. Hosting</h3>
                        <p>Wir hosten die Inhalte unserer Website bei GitHub Pages.</p>
                        <p>Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA (nachfolgend GitHub).</p>
                        <p>GitHub erfasst Logfiles inklusive Ihrer IP-Adressen. Die Logfiles werden laut GitHub jedoch nur kurzzeitig gespeichert und dienen der Sicherheit sowie Fehleranalyse.</p>
                        <p>Weitere Details entnehmen Sie der Datenschutzerklärung von GitHub: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="underline">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>.</p>

                        <h3 className="font-bold text-neutral-900 text-base mt-6">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                        <h4 className="font-bold text-neutral-900">Datenschutz</h4>
                        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

                        <h4 className="font-bold text-neutral-900 mt-4">Hinweis zur Datenweitergabe in die USA</h4>
                        <p>Auf unserer Website sind unter anderem Tools von Unternehmen mit Sitz in den USA eingebunden (GitHub). Wenn diese Tools aktiv sind, können Ihre personenbezogenen Daten an die US-Server der jeweiligen Unternehmen weitergegeben werden. Wir weisen darauf hin, dass die USA kein sicherer Drittstaat im Sinne des EU-Datenschutzrechts sind.</p>

                        <div className="text-xs text-neutral-400 mt-8">
                            Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">e-recht24.de</a>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}