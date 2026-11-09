---
type: Model
title: Nova Pro
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.62
output_speed_tps: None
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.0, z: -0.94, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 9.3, z: -0.94, r: 35.9, estimated: false }  # 코딩
  agentic: { s: 9.3, z: -0.86, r: 37.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.2, z: -1.63, r: 25.6, estimated: false }  # 멀티모달
  long_context: { s: 23.7, z: -0.87, r: 36.9, estimated: false }  # 긴문맥
  instruction: { s: 36.5, z: -0.7, r: 39.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Nova Pro

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.8 · 출력 $3.2 · 혼합 $0.62/1M · None t/s · TTFT Nones · 300k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.94 | 실측 | [[gpqa-diamond]] 49.9%×0.4, [[humanitys-last-exam]] 3.2%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 49.9%×1.0, [[humanitys-last-exam]] 3.2%×1.0 |
| 코딩 | 35.9 | -0.94 | 실측 | [[terminal-bench]] 6.1%×0.5 |
| 에이전트 | 37.1 | -0.86 | 실측 | [[terminal-bench]] 6.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.6 | -1.63 | 실측 | [[mmmu-pro]] 44.0%×1.0 |
| 긴문맥 | 36.9 | -0.87 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 39.5 | -0.7 | 실측 | [[ifbench]] 38.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
