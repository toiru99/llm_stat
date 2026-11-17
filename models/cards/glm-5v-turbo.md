---
type: Model
title: GLM 5V Turbo
creator: Z AI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.4, z: 0.45, r: 56.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.0, r: 49.9, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.33, r: 55.0, estimated: false }  # 코딩
  agentic: { s: 74.4, z: 1.03, r: 65.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.0, z: 0.34, r: 55.1, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 68.8, z: 0.63, r: 59.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM 5V Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GLM 5V Turbo

Z AI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.8 | +0.45 | 실측 | [[gpqa-diamond]] 80.90909090909089%×0.4, [[humanitys-last-exam]] 17.1455050973123%×0.3 |
| 추론 | 49.9 | +-0.0 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 80.90909090909089%×1.0, [[humanitys-last-exam]] 17.1455050973123%×1.0 |
| 코딩 | 55.0 | +0.33 | 실측 | [[terminal-bench]] 32.5757575757576%×0.5 |
| 에이전트 | 65.5 | +1.03 | 실측 | [[tau2-bench]] 98.5380116959064%×1.0, [[terminal-bench]] 32.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.1 | +0.34 | 실측 | [[mmmu-pro]] 72.7745664739884%×1.0 |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.3333333333333%×1.0 |
| 지시 따르기 | 59.5 | +0.63 | 실측 | [[ifbench]] 61.0884353741497%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
