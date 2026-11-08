---
type: Model
title: GPT-5 nano (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.9, z: -1.12, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 21.5, z: -1.08, r: 33.9, estimated: false }  # 추론
  coding: { s: 10.3, z: -0.9, r: 36.4, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -0.82, r: 37.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 23.0, z: -2.44, r: 13.3, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.9, r: 36.4, estimated: false }  # 긴문맥
  instruction: { s: 28.7, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-5 nano (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.12 | 실측 | [[gpqa-diamond]] 42.8%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.9 | -1.08 | 실측 | [[gpqa-diamond]] 42.8%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.4 | -0.9 | 실측 | [[terminal-bench]] 6.8%×0.5 |
| 에이전트 | 37.7 | -0.82 | 실측 | [[terminal-bench]] 6.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 13.3 | -2.44 | 실측 | [[mmmu-pro]] 32.0%×1.0 |
| 긴문맥 | 36.4 | -0.9 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 32.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
