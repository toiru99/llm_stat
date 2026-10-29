---
type: Model
title: gpt-oss-20b (high)
creator: OpenAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 150.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.3, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 42.6, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 41.1, z: 0.13, r: 52.0, estimated: false }  # 코딩
  agentic: { s: 12.3, z: -0.75, r: 38.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.3, z: -0.39, r: 44.2, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.92, r: 63.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# gpt-oss-20b (high)

OpenAI · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.22 · 혼합 $0.067/1M · 150.0 t/s · TTFT 0.73s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.0 | +0.13 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 38.7 | -0.75 | 실측 | [[apex-agents]] 1.0%×1.0, [[gdpval]] 348.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.2 | -0.39 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
