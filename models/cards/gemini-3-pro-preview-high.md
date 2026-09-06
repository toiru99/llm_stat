---
type: Model
title: Gemini 3 Pro Preview (high)
creator: Google
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.2, z: 2.04, r: 80.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.35, r: 70.3, estimated: false }  # 추론
  coding: { s: 63.6, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.47, r: 72.0, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 90.3, z: 1.0, r: 64.9, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 3 Pro Preview (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 18.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.6 | +2.04 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 70.3 | +1.35 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 72.0 | +1.47 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 64.9 | +1.0 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
