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
  knowledge: { s: 44.8, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.42, r: 43.8, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.4, r: 55.9, estimated: false }  # 코딩
  agentic: { s: 73.5, z: 0.99, r: 64.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.2, r: 47.0, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.19, r: 47.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# DeepSeek V4 Flash (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.0938 · 출력 $0.1876 · 혼합 $0.0508/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[gpqa-diamond]] 71.6161616161616%×0.4, [[humanitys-last-exam]] 7.784986098239111%×0.3 |
| 추론 | 43.8 | -0.42 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 71.6161616161616%×1.0, [[humanitys-last-exam]] 7.784986098239111%×1.0 |
| 코딩 | 55.9 | +0.4 | 실측 | [[terminal-bench]] 34.0909090909091%×0.5 |
| 에이전트 | 64.8 | +0.99 | 실측 | [[tau2-bench]] 94.4444444444445%×1.0, [[terminal-bench]] 34.0909090909091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.0 | -0.2 | 실측 | [[aa-lcr]] 41.6666666666667%×1.0 |
| 지시 따르기 | 47.1 | -0.19 | 실측 | [[ifbench]] 47.2108843537415%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
