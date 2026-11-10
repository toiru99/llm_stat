---
type: Model
title: Kimi K2 Thinking
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.79
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.2, z: 0.74, r: 61.0, estimated: false }  # 전문 지식
  reasoning: { s: 58.3, z: 0.74, r: 61.1, estimated: false }  # 추론
  coding: { s: 47.2, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 47.2, z: 0.42, r: 56.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 78.7, z: 1.11, r: 66.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2 Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Kimi K2 Thinking

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.6 · 출력 $2.5 · 혼합 $0.79/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.0 | +0.74 | 실측 | [[gpqa-diamond]] 83.8%×0.4, [[humanitys-last-exam]] 23.8%×0.3 |
| 추론 | 61.1 | +0.74 | 실측 | [[gpqa-diamond]] 83.8%×1.0, [[humanitys-last-exam]] 23.8%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[terminal-bench]] 31.1%×0.5 |
| 에이전트 | 56.3 | +0.42 | 실측 | [[terminal-bench]] 31.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 실측 | [[ifbench]] 68.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
