---
type: Model
title: Mistral Large 2 (Nov)
creator: Mistral
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 123
is_reasoning: false
radar:
  knowledge: { s: 30.6, z: -0.51, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 35.3, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 20.2, z: -0.63, r: 40.5, estimated: false }  # 에이전트
  trust: { s: 35.6, z: 0.36, r: 55.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.6, z: -1.27, r: 30.9, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.09, r: 33.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Mistral Large 2 (Nov)

Mistral · Open · Medium(123B) · 컨텍스트 128k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.51 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 40.5 | -0.63 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 55.4 | +0.36 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.9 | -1.27 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 33.7 | -1.09 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
