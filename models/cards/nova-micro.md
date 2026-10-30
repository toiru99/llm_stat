---
type: Model
title: Nova Micro
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0271
output_speed_tps: 294.0
context_window: 130000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.1, z: -1.29, r: 30.6, estimated: false }  # 전문 지식
  reasoning: { s: 18.4, z: -1.23, r: 31.5, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.14, r: 32.9, estimated: false }  # 코딩
  agentic: { s: 3.0, z: -1.07, r: 34.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.6, z: -1.13, r: 33.1, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.2, r: 31.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Nova Micro

Amazon · Proprietary · Unknown · 컨텍스트 130k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.04 · 출력 $0.14 · 혼합 $0.0271/1M · 294.0 t/s · TTFT 0.82s · 130k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.6 | -1.29 | 실측 | [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.5 | -1.23 | 실측 | [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.9 | -1.14 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 34.0 | -1.07 | 실측 | [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.1 | -1.13 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 31.9 | -1.2 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
