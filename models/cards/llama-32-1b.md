---
type: Model
title: Llama 3.2 1B
creator: Meta
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 9.5, z: -1.5, r: 27.5, estimated: false }  # 전문 지식
  reasoning: { s: 5.7, z: -1.46, r: 28.0, estimated: false }  # 추론
  coding: { s: 2.2, z: -1.86, r: 22.1, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.41, r: 28.9, estimated: false }  # 에이전트
  trust: { s: 36.8, z: 0.45, r: 56.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.6, z: -1.27, r: 30.9, estimated: false }  # 긴문맥
  instruction: { s: 15.5, z: -1.55, r: 26.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Llama 3.2 1B

Meta · Open · Unknown · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.5 | -1.5 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 18.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 28.0 | -1.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 18.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 22.1 | -1.86 | 실측 | [[scicode]] 2.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.9 | -1.41 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 56.8 | +0.45 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.9 | -1.27 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 26.8 | -1.55 | 실측 | [[ifbench]] 23.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
