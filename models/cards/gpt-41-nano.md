---
type: Model
title: GPT-4.1 nano
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0775
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.9, z: -0.87, r: 37.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.8, z: -0.85, r: 37.2, estimated: false }  # 추론
  coding: { s: 5.8, z: -1.07, r: 34.0, estimated: false }  # 코딩
  agentic: { s: 7.7, z: -0.92, r: 36.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 33.8, z: -1.9, r: 21.5, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.9, r: 36.5, estimated: false }  # 긴문맥
  instruction: { s: 27.9, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GPT-4.1 nano

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.0775/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.0 | -0.87 | 실측 | [[gpqa-diamond]] 51.2%×0.4, [[humanitys-last-exam]] 3.8%×0.3 |
| 추론 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 51.2%×1.0, [[humanitys-last-exam]] 3.8%×1.0 |
| 코딩 | 34.0 | -1.07 | 실측 | [[terminal-bench]] 3.8%×0.5 |
| 에이전트 | 36.3 | -0.92 | 실측 | [[gdpval]] 206.0%×1.0, [[tau3-banking]] 3.5%×1.0, [[terminal-bench]] 3.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 21.5 | -1.9 | 실측 | [[mmmu-pro]] 40.0%×1.0 |
| 긴문맥 | 36.5 | -0.9 | 실측 | [[aa-lcr]] 20.3%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
