
  <template>
    <Vueform
        style="width: 100%; "
      size="lg"
      
    >
      <SelectElement
        name="select"
        style="color: #4B4B4B;"
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
        :floating="false"
        size="lg"
        
      />
      <SelectElement
      style="color: #4B4B4B;"
        name="select_1"
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
        
        name="select_2"
        style="color: #4B4B4B;"
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


      <StaticElement
      style="margin-top: 2rem; color: #D00412; font-size: 18px;font-weight: bold;"
        name="h4"
        tag="h4"
        content="Number of Enrollments"
      />


      <TextElement
        style="color: #4B4B4B; "
        name="number"
        input-type="number"
        :rules="[
          'nullable',
          'numeric',
        ]"
        autocomplete="off"
        label="CHED-IDENTIFIED /  RDC-IDENTIFIED PRIORITY PROGRAMS"
      />
      <TextElement
        style="color: #4B4B4B;"
        name="number_1"
        input-type="number"
        :rules="[
          'nullable',
          'numeric',
        ]"
        autocomplete="off"
        label="Neither"
      />

      <ButtonElement
        name="primaryButton"
        button-label="Add"
        align="right"
        
      
    />

    </Vueform>
  </template>

