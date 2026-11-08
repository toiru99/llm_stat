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
is_reasoning: null
radar:
  knowledge: { s: 58.3, z: 0.4, r: 56.0, estimated: false }  # 전문 지식
  reasoning: { s: 54.4, z: 0.4, r: 56.0, estimated: false }  # 추론
  coding: { s: 49.5, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.52, r: 57.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.35, r: 55.3, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 68.8, z: 0.67, r: 60.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM 5V Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GLM 5V Turbo

Z AI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.0 | +0.4 | 실측 | [[gpqa-diamond]] 80.9%×0.4, [[humanitys-last-exam]] 17.1%×0.3 |
| 추론 | 56.0 | +0.4 | 실측 | [[gpqa-diamond]] 80.9%×1.0, [[humanitys-last-exam]] 17.1%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[terminal-bench]] 32.6%×0.5 |
| 에이전트 | 57.8 | +0.52 | 실측 | [[terminal-bench]] 32.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.3 | +0.35 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 70.3%×1.0 |
| 지시 따르기 | 60.1 | +0.67 | 실측 | [[ifbench]] 61.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
