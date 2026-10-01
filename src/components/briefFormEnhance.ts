import { buildBriefMessage, mailtoUrl, whatsappUrl } from "@/lib/brief";

/**
 * Progressive enhancement for the server-rendered brief form: validation plus the pre-filled
 * email / WhatsApp hand-off. Lives in its own lazy chunk; without it the form still posts to
 * the same mailto: address and the plain links under it work.
 */
export function enhanceBriefForm(form: HTMLFormElement) {
  const $ = <T extends HTMLElement>(sel: string) => form.querySelector<T>(sel)!;
  const status = $("#brief-status");

  const setError = (fieldId: string, errId: string, msg: string) => {
    const field = $(`#${fieldId}`);
    const err = $(`#${errId}`);
    err.textContent = msg;
    err.hidden = !msg;
    if (msg) {
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", errId);
    } else {
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
    }
  };

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const data = new FormData(form);
    const via = e.submitter?.getAttribute("value") ?? "email";

    const noType = !String(data.get("type") ?? "");
    const noBrief = String(data.get("brief") ?? "").trim().length < 5;
    setError("brief-type", "brief-type-err", noType ? "Choose a project type." : "");
    setError("brief-text", "brief-text-err", noBrief ? "Add a short one-line brief (at least a few words)." : "");
    status.textContent = "";
    if (noType || noBrief) {
      $<HTMLElement>(noType ? "#brief-type" : "#brief-text").focus();
      return;
    }

    const body = buildBriefMessage(data);
    if (via === "whatsapp") {
      window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
      status.textContent = "Opening WhatsApp with your brief filled in.";
    } else {
      window.location.href = mailtoUrl(body);
      status.textContent =
        "Opening your email app with your brief filled in. If nothing opens, use the links below.";
    }
  };

  form.addEventListener("submit", onSubmit);
  return () => form.removeEventListener("submit", onSubmit);
}
