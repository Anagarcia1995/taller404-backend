import Event from "../model/EventModel.js";

export const createEvent = async (req, res) => {
  try {
    const { name, date, djs, price } = req.body;

    if (!name || !date || !djs || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path; // ruta guardada por Multer
    }

    const event = new Event({
      name: name.trim(),
      date: date.trim(),
      djs: djs.trim(),
      price,
      image: imagePath,
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, djs, price } = req.body;

    let updateData = { name, date, djs, price };
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedEvent) return res.status(404).json({ error: "Event not found" });

    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) return res.status(404).json({ error: "Event not found" });

    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//bhdsjkfhls