import { Space, Switch } from "happy-ui";
import { Check, CloseBold } from "solid-dada-icons";
import { createSignal } from "solid-js";

export function Disabled() {
  const [checked, setChecked] = createSignal(false);
  return (
    <Space>
      <Switch />
      <Switch
        disabled
        checkedChildren="开"
        unCheckedChildren="关闭"
        onCheckedChange={(detail) => {
          setChecked(detail.checked);
        }}
      />
      <Switch
        checked={checked()}
        checkedChildren="开启"
        unCheckedChildren="关闭"
        onCheckedChange={(detail) => {
          setChecked(detail.checked);
        }}
      />
      <Switch
        checkedChildren="1"
        unCheckedChildren="0"
        onCheckedChange={(detail) => {
          setChecked(detail.checked);
        }}
      />
    </Space>
  );
}
