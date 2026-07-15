---
type: Model
title: Gemma 3n E2B
creator: Google
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.0
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 5.98
is_reasoning: false
radar:
  knowledge: { s: 10.5, z: -1.45, r: 28.3, estimated: false }  # 전문 지식
  reasoning: { s: 7.1, z: -1.4, r: 29.0, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.7, r: 24.6, estimated: false }  # 코딩
  agentic: { s: 0.8, z: -1.38, r: 29.3, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.92, r: 36.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.57, r: 26.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# Gemma 3n E2B

Google · Open · Small(5.98B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.3 | -1.45 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 29.0 | -1.4 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 24.6 | -1.7 | 실측 | [[scicode]] 5.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 29.3 | -1.38 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 36.2 | -0.92 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 26.5 | -1.57 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
