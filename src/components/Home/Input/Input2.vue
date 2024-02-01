<template>
  <Vueform
    size="lg"
    class="w-100"
  >
    <SelectElement
      style="color: #4B4B4B;"
      name="campus"
      :items="[
        {
          value: 0,
          label: 'Label',
        },
      ]"
      :search="true"
      :native="false"
      label="Campus"
      input-type="search"
      autocomplete="off"
    />
    <SelectElement
      style="color: #4B4B4B;"
      name="department"
      :items="[
        {
          value: 0,
          label: 'Label',
        },
      ]"
      :search="true"
      :native="false"
      label="Department"
      input-type="search"
      autocomplete="off"
    />
    <SelectElement
      style="color: #4B4B4B;"
      name="program"
      :items="[
        {
          value: 0,
          label: 'Label',
        },
      ]"
      :search="true"
      :native="false"
      label="Program"
      input-type="search"
      autocomplete="off"
    />
    <TextElement
      style="color: #4B4B4B;"
      name="lname"
      label="Lastname"
    />
    <TextElement
    style="color: #4B4B4B;"
      name="Firstname"
      label="Firstname"
    />
    <TextElement
    style="color: #4B4B4B;"
      name="mname"
      label="Middle Initial"
    />
    <SelectElement
    style="color: #4B4B4B;"
      name="status"
      :items="[
        {
          value: 0,
          label: 'Label',
        },
      ]"
      :search="true"
      :native="false"
      label="Status"
      input-type="search"
      autocomplete="off"
    />
    <TextElement
    style="color: #4B4B4B;"
      name="business"
      label="Company's Name / Business"
    />
    <ButtonElement
      name="primaryButton"
      button-label="Add"
      align="right"
    />
  </Vueform>
</template>