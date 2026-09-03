---
type: Model
title: Gemini 3 Pro Preview (high)
creator: Google
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.5, z: 2.11, r: 81.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.6, z: 1.42, r: 71.3, estimated: false }  # 추론
  coding: { s: 81.4, z: 1.44, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.6, estimated: false }  # 신뢰성
  multimodal: { s: 91.5, z: 1.04, r: 65.6, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.2, r: 68.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3 Pro Preview (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 23.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.6 | +2.11 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 71.3 | +1.42 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 71.7 | +1.44 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 37.6 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 65.6 | +1.04 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
