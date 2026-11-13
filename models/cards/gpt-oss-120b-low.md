---
type: Model
title: gpt-oss-120b (low)
creator: OpenAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.172
output_speed_tps: None
context_window: 131000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.7, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: -0.33, r: 45.0, estimated: false }  # 추론
  coding: { s: 8.0, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 7.6, z: -0.93, r: 36.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.9, z: -0.04, r: 49.4, estimated: false }  # 긴문맥
  instruction: { s: 64.9, z: 0.51, r: 57.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# gpt-oss-120b (low)

OpenAI · Open · Medium · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.13 · 출력 $0.59 · 혼합 $0.172/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[gpqa-diamond]] 67.2%×0.4, [[humanitys-last-exam]] 5.9%×0.3 |
| 추론 | 45.0 | -0.33 | 실측 | [[gpqa-diamond]] 67.2%×1.0, [[humanitys-last-exam]] 5.9%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 5.3%×0.5 |
| 에이전트 | 36.1 | -0.93 | 실측 | [[gdpval]] 179.0%×1.0, [[tau3-banking]] 2.9%×1.0, [[terminal-bench]] 5.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.4 | -0.04 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 57.6 | +0.51 | 실측 | [[ifbench]] 58.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
