import { Label, Textarea } from "flowbite-react";

export function TeaxtArea({
  placeholder,
  label = "Label",
  name,
  handleChange,
  value,
}) {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" style={{ color: "black" }} value={label} />
      </div>
      <Textarea
        name={name}
        onChange={handleChange}
        style={{ background: "#eeee", color: "black" }}
        id="comment"
        placeholder={placeholder}
        required
        rows={4}
      />
    </div>
  );
}
