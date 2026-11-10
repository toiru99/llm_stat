---
type: Model
title: Nova Micro
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0271
output_speed_tps: None
context_window: 130000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.2, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -1.26, r: 31.1, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.19, r: 32.2, estimated: false }  # 코딩
  agentic: { s: 2.3, z: -1.1, r: 33.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.7, z: -1.15, r: 32.8, estimated: false }  # 긴문맥
  instruction: { s: 24.3, z: -1.23, r: 31.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Nova Micro

Amazon · Proprietary · Unknown · 컨텍스트 130k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.035 · 출력 $0.14 · 혼합 $0.0271/1M · None t/s · TTFT Nones · 130k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[gpqa-diamond]] 35.8%×0.4, [[humanitys-last-exam]] 4.6%×0.3 |
| 추론 | 31.1 | -1.26 | 실측 | [[gpqa-diamond]] 35.8%×1.0, [[humanitys-last-exam]] 4.6%×1.0 |
| 코딩 | 32.2 | -1.19 | 실측 | [[terminal-bench]] 1.5%×0.5 |
| 에이전트 | 33.5 | -1.1 | 실측 | [[terminal-bench]] 1.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.8 | -1.15 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 31.6 | -1.23 | 실측 | [[ifbench]] 29.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
