---
type: Model
title: Gemini 3 Pro Preview (low)
creator: Google
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.5, z: 1.62, r: 74.2, estimated: false }  # 전문 지식
  reasoning: { s: 48.6, z: 0.68, r: 60.2, estimated: false }  # 추론
  coding: { s: 72.7, z: 1.05, r: 65.8, estimated: false }  # 코딩
  agentic: { s: 60.1, z: 0.97, r: 64.5, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: -0.0, r: 49.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Gemini 3 Pro Preview (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 19.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.2 | +1.62 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 60.2 | +0.68 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 65.8 | +1.05 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 64.5 | +0.97 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 49.9 | +-0.0 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
