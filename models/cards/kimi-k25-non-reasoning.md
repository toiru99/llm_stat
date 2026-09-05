---
type: Model
title: Kimi K2.5 (Non-reasoning)
creator: Kimi
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.84
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 43.6, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 28.8, z: -0.11, r: 48.3, estimated: false }  # 코딩
  agentic: { s: 55.3, z: 0.68, r: 60.2, estimated: false }  # 에이전트
  trust: { s: 49.5, z: 1.18, r: 67.8, estimated: false }  # 신뢰성
  multimodal: { s: 80.6, z: 0.51, r: 57.7, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Kimi K2.5 (Non-reasoning)

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.84/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 27.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 48.3 | -0.11 | 실측 | [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 60.2 | +0.68 | 실측 | [[tau2-bench]] 81.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 67.8 | +1.18 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 57.7 | +0.51 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
