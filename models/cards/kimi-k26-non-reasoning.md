---
type: Model
title: Kimi K2.6 (non-reasoning)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.702
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.4, z: 0.46, r: 56.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.5, z: 0.46, r: 56.8, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.66, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 57.5, z: 0.77, r: 61.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.77, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 45.2, z: -0.33, r: 45.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Kimi K2.6 (non-reasoning)

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.9 | +0.46 | 실측 | [[gpqa-diamond]] 78.8%×0.4, [[humanitys-last-exam]] 19.6%×0.3 |
| 추론 | 56.8 | +0.46 | 실측 | [[gpqa-diamond]] 78.8%×1.0, [[humanitys-last-exam]] 19.6%×1.0 |
| 코딩 | 60.0 | +0.66 | 실측 | [[terminal-bench]] 37.9%×0.5 |
| 에이전트 | 61.5 | +0.77 | 실측 | [[terminal-bench]] 37.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.5 | +0.77 | 실측 | [[aa-lcr]] 69.7%×1.0 |
| 지시 따르기 | 45.1 | -0.33 | 실측 | [[ifbench]] 44.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
