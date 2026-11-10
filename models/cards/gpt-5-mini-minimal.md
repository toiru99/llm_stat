---
type: Model
title: GPT-5 mini (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.3, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 36.8, z: -0.31, r: 45.3, estimated: false }  # 추론
  coding: { s: 21.9, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 21.9, z: -0.44, r: 43.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.1, z: -0.67, r: 39.9, estimated: false }  # 멀티모달
  long_context: { s: 44.3, z: -0.26, r: 46.1, estimated: false }  # 긴문맥
  instruction: { s: 47.1, z: -0.25, r: 46.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# GPT-5 mini (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[gpqa-diamond]] 68.7%×0.4, [[humanitys-last-exam]] 5.1%×0.3 |
| 추론 | 45.3 | -0.31 | 실측 | [[gpqa-diamond]] 68.7%×1.0, [[humanitys-last-exam]] 5.1%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 14.4%×0.5 |
| 에이전트 | 43.4 | -0.44 | 실측 | [[terminal-bench]] 14.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 39.9 | -0.67 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 46.1 | -0.26 | 실측 | [[aa-lcr]] 39.3%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 실측 | [[ifbench]] 45.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
