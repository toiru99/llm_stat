---
type: Model
title: Gemma 3 1B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 11.7, z: -1.71, r: 24.3, estimated: false }  # 전문 지식
  reasoning: { s: 7.3, z: -1.39, r: 29.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.35, r: 29.7, estimated: false }  # 코딩
  agentic: { s: 5.3, z: -1.36, r: 29.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 11.0, z: -1.78, r: 23.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemma 3 1B

Google · Open · Tiny · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 24.3 | -1.71 | 실측 | [[gpqa-diamond]] 23.737373737373698%×0.4, [[humanitys-last-exam]] 5.32900834105653%×0.3 |
| 추론 | 29.2 | -1.39 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 23.737373737373698%×1.0, [[humanitys-last-exam]] 5.32900834105653%×1.0 |
| 코딩 | 29.7 | -1.35 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 29.6 | -1.36 | 실측 | [[tau2-bench]] 10.526315789473701%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 23.2 | -1.78 | 실측 | [[ifbench]] 19.9319727891156%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
