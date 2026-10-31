---
type: Model
title: DeepSeek V4 Pro (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 1.3568
output_speed_tps: 167.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.2, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 41.9, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.58, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 54.5, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# DeepSeek V4 Pro (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.74 · 출력 $3.49 · 혼합 $1.3568/1M · 167.0 t/s · TTFT 1.37s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 58.8 | +0.58 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
