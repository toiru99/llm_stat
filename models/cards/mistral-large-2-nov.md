---
type: Model
title: Mistral Large 2 (Nov)
creator: Mistral
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 2.4
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.6, z: -0.47, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.85, r: 37.3, estimated: false }  # 추론
  coding: { s: 35.3, z: -0.46, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 20.2, z: -0.62, r: 40.7, estimated: false }  # 에이전트
  trust: { s: 36.5, z: 0.4, r: 56.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.6, z: -1.24, r: 31.4, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.05, r: 34.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Mistral Large 2 (Nov)

Mistral · Open · Unknown · 컨텍스트 128k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $2.4/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 3.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.47 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.3 | -0.85 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.2 | -0.46 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 40.7 | -0.62 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 56.0 | +0.4 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.4 | -1.24 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 34.2 | -1.05 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
