---
type: Model
title: Nova 2.0 Lite (low)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.7, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: -0.38, r: 44.4, estimated: false }  # 추론
  coding: { s: 5.8, z: -1.06, r: 34.2, estimated: false }  # 코딩
  agentic: { s: 5.8, z: -0.98, r: 35.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.1, z: -0.67, r: 39.9, estimated: false }  # 멀티모달
  long_context: { s: 61.2, z: 0.26, r: 53.8, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.68, r: 60.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Nova 2.0 Lite (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[gpqa-diamond]] 69.8%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 44.4 | -0.38 | 실측 | [[gpqa-diamond]] 69.8%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.2 | -1.06 | 실측 | [[terminal-bench]] 3.8%×0.5 |
| 에이전트 | 35.3 | -0.98 | 실측 | [[terminal-bench]] 3.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 39.9 | -0.67 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 53.8 | +0.26 | 실측 | [[aa-lcr]] 54.3%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 실측 | [[ifbench]] 61.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
