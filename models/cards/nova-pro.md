---
type: Model
title: Nova Pro
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.62
output_speed_tps: 102.926639029744
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.7, z: -0.95, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.4, z: -0.95, r: 35.8, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.05, r: 34.3, estimated: false }  # 코딩
  agentic: { s: 11.7, z: -1.15, r: 32.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.8, z: -1.61, r: 25.8, estimated: false }  # 멀티모달
  long_context: { s: 23.7, z: -0.89, r: 36.7, estimated: false }  # 긴문맥
  instruction: { s: 36.5, z: -0.73, r: 39.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Nova Pro

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.8 · 출력 $3.2 · 혼합 $0.62/1M · 102.926639029744 t/s · TTFT 2.67964568537358s · 300k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.95 | 실측 | [[gpqa-diamond]] 49.898989898989896%×0.4, [[humanitys-last-exam]] 3.19%×0.3 |
| 추론 | 35.8 | -0.95 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.898989898989896%×1.0, [[humanitys-last-exam]] 3.19%×1.0 |
| 코딩 | 34.3 | -1.05 | 실측 | [[terminal-bench]] 6.06060606060606%×0.5 |
| 에이전트 | 32.8 | -1.15 | 실측 | [[tau2-bench]] 14.0350877192982%×1.0, [[terminal-bench]] 6.06060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.8 | -1.61 | 실측 | [[mmmu-pro]] 44.3352601156069%×1.0 |
| 긴문맥 | 36.7 | -0.89 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 39.1 | -0.73 | 실측 | [[ifbench]] 38.0952380952381%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
