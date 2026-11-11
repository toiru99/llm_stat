---
type: Model
title: KAT-Coder-Pro V2
creator: KwaiKAT
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 58.8, z: 0.57, r: 58.6, estimated: false }  # 전문 지식
  reasoning: { s: 54.0, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 40.9, z: 0.21, r: 53.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 76.7, z: 1.03, r: 65.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# KAT-Coder-Pro V2

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.6 | +0.57 | 실측 | [[gpqa-diamond]] 85.5%×0.4, [[humanitys-last-exam]] 16.1%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[gpqa-diamond]] 85.5%×1.0, [[humanitys-last-exam]] 16.1%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[terminal-bench]] 49.2%×0.5 |
| 에이전트 | 53.1 | +0.21 | 실측 | [[gdpval]] 742.0%×1.0, [[tau3-banking]] 4.5%×1.0, [[terminal-bench]] 49.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 실측 | [[ifbench]] 66.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
