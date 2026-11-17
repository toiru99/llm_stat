---
type: Model
title: Nova Pro
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.62
output_speed_tps: 98.41765757627529
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.7, z: -0.94, r: 35.9, estimated: false }  # 전문 지식
  reasoning: { s: 16.4, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 11.7, z: -1.14, r: 32.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.9, z: -1.6, r: 25.9, estimated: false }  # 멀티모달
  long_context: { s: 23.7, z: -0.88, r: 36.8, estimated: false }  # 긴문맥
  instruction: { s: 36.5, z: -0.72, r: 39.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nova Pro

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.8 · 출력 $3.2 · 혼합 $0.62/1M · 98.41765757627529 t/s · TTFT 2.6304783372945044s · 300k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.9 | -0.94 | 실측 | [[gpqa-diamond]] 49.898989898989896%×0.4, [[humanitys-last-exam]] 3.19%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.898989898989896%×1.0, [[humanitys-last-exam]] 3.19%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[terminal-bench]] 6.06060606060606%×0.5 |
| 에이전트 | 32.9 | -1.14 | 실측 | [[tau2-bench]] 14.0350877192982%×1.0, [[terminal-bench]] 6.06060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.9 | -1.6 | 실측 | [[mmmu-pro]] 44.3352601156069%×1.0 |
| 긴문맥 | 36.8 | -0.88 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 39.2 | -0.72 | 실측 | [[ifbench]] 38.0952380952381%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
