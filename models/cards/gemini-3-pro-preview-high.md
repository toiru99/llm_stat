---
type: Model
title: Gemini 3 Pro Preview (high)
creator: Google
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.7575
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.8, z: 2.24, r: 83.6, estimated: false }  # 전문 지식
  reasoning: { s: 64.6, z: 1.51, r: 72.7, estimated: false }  # 추론
  coding: { s: 83.4, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.53, r: 72.9, estimated: false }  # 에이전트
  trust: { s: 9.2, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.3, r: 69.5, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.18, r: 67.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Gemini 3 Pro Preview (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.7575/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 22.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.6 | +2.24 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 72.7 | +1.51 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 72.9 | +1.53 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 69.5 | +1.3 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
