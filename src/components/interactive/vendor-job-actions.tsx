"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getStatusClass } from "@/lib/status";
import type { TicketStatus } from "@/lib/mock-data";

const STATUS_FLOW: Record<string, TicketStatus | null> = {
  Pending: "In Progress",
  "In Progress": "Completed",
  Completed: null,
};

const STATUS_ACTION: Record<string, string> = {
  Pending: "Start Job",
  "In Progress": "Mark Completed",
  Completed: "",
};

export function VendorJobActions({ initialStatus }: { initialStatus: string }) {
  const [status, setStatus] = useState<string>(initialStatus);
  const [notes, setNotes] = useState<{ text: string; time: string }[]>([]);
  const [noteText, setNoteText] = useState("");

  const nextStatus = STATUS_FLOW[status];

  function advance() {
    if (nextStatus) setStatus(nextStatus);
  }

  function addNote(e: React.FormEvent) {
    e.preventDefault();
    if (!noteText.trim()) return;
    setNotes((prev) => [
      { text: noteText.trim(), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ...prev,
    ]);
    setNoteText("");
  }

  return (
    <div className="space-y-4">
      {/* Status update */}
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Update Status</CardTitle>
          <CardDescription>Move this job through the workflow.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Current:</span>
            <Badge className={getStatusClass(status)}>{status}</Badge>
          </div>
          <div className="flex gap-3 flex-wrap">
            {nextStatus && (
              <Button onClick={advance}>
                {STATUS_ACTION[status]} → {nextStatus}
              </Button>
            )}
            {status === "Completed" && (
              <div className="flex items-center gap-2 text-sm text-emerald-700">
                <span>✓ Job completed</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Progress notes */}
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Progress Notes</CardTitle>
          <CardDescription>Log updates visible to the property manager.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={addNote} className="flex gap-2">
            <input
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Add a note…"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
            <Button type="submit" variant="outline">
              Add
            </Button>
          </form>
          {notes.length > 0 && (
            <div className="divide-y">
              {notes.map((n, i) => (
                <div key={i} className="py-2">
                  <p className="text-sm">{n.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Today, {n.time}</p>
                </div>
              ))}
            </div>
          )}
          {notes.length === 0 && (
            <p className="text-xs text-muted-foreground">No notes yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
