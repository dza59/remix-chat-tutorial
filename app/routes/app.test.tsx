import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { Form, useActionData, useSubmit } from "@remix-run/react";
import { Button, Card, Page, TextField } from "@shopify/polaris";
import { useState } from "react";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  console.log("Action called!!!!!!!!!!!!!!!!!!!");
  debugger;
  return json({
    hellow: "world",
  });
}

export default function Todos() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = useSubmit();
  const actionData = useActionData<typeof action>();
  console.log(actionData, "actionData");

  const generateDiscount = () => submit({}, { replace: true, method: "POST" });

  return (
    <Page>
      <Card>
        <Form onSubmit={generateDiscount} method="post">
          <TextField
            id="name"
            name="name"
            label="Name"
            autoComplete="off"
            value={name}
            type="text"
            onChange={(value) => setName(value)}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            autoComplete="off"
            value={email}
            type="text"
            onChange={(value) => setName(value)}
          />
          <Button submit>Test BTN</Button>
        </Form>
      </Card>
    </Page>
  );
}
