---
type: Model
title: DeepSeek V4 Flash (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0508
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.7, z: -0.11, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: -0.15, r: 47.8, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.46, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 51.7, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.18, r: 47.2, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.16, r: 47.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# DeepSeek V4 Flash (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.0938 · 출력 $0.19 · 혼합 $0.0508/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.3 | -0.11 | 실측 | [[gpqa-diamond]] 71.6%×0.4, [[humanitys-last-exam]] 7.8%×0.3 |
| 추론 | 47.8 | -0.15 | 실측 | [[gpqa-diamond]] 71.6%×1.0, [[humanitys-last-exam]] 7.8%×1.0 |
| 코딩 | 57.0 | +0.46 | 실측 | [[terminal-bench]] 34.1%×0.5 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[terminal-bench]] 34.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.2 | -0.18 | 실측 | [[aa-lcr]] 41.7%×1.0 |
| 지시 따르기 | 47.6 | -0.16 | 실측 | [[ifbench]] 47.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
