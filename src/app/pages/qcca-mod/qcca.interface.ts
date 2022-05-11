import { qccaFooterOptions } from "./qcca-footer/qcca-footer.interface";
import { qccaHeaderOptions } from "./qcca-header/qcca-header.interface";

export interface qccaModOptions {
    header?: qccaHeaderOptions,
    footer: qccaFooterOptions
}
