import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen scroll-mt-24 w-full">
      <h2 className="text-4xl">Contact</h2>

      <Separator className='my-4' />
      
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="contact-name">
                  Name
                </FieldLabel>
                <Input
                  id="contact-name"
                  placeholder="First Last"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="contact-email">
                  Email
                </FieldLabel>
                <Input
                  id="contact-email"
                  placeholder="first.last@example.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="contact-message">
                  Message
                </FieldLabel>
                <Textarea
                  id="contact-message"
                  placeholder="Your message here..."
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal" className="justify-end">
            <Button variant="outline" type="button">
              Reset
            </Button>

            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </section>
  );
}