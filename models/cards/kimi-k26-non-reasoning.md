---
type: Model
title: Kimi K2.6 (Non-reasoning)
creator: Kimi
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.702
output_speed_tps: 44.0
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 45.7, z: 0.23, r: 53.5, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.18, r: 52.6, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.9, r: 63.4, estimated: false }  # 코딩
  agentic: { s: 76.3, z: 1.48, r: 72.3, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.48, r: 72.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Kimi K2.6 (Non-reasoning)

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · 44.0 t/s · TTFT 2.65s · 256k ctx` · 가성비 39.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.5 | +0.23 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 52.6 | +0.18 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 63.4 | +0.9 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 72.3 | +1.48 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 72.2 | +1.48 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
