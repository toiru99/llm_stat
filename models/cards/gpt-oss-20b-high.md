---
type: Model
title: gpt-oss-20b (high)
creator: OpenAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.8, z: -0.1, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 40.9, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: 40.4, z: 0.09, r: 51.4, estimated: false }  # 코딩
  agentic: { s: 12.0, z: -0.77, r: 38.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.1, z: -0.42, r: 43.8, estimated: false }  # 긴문맥
  instruction: { s: 74.4, z: 0.93, r: 64.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# gpt-oss-20b (high)

OpenAI · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.22 · 혼합 $0.067/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.1 | 실측 | [[gpqa-diamond]] 68.8%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[gpqa-diamond]] 68.8%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 51.4 | +0.09 | 실측 | [[scicode]] 38.9%×1.0, [[terminal-bench]] 10.6%×0.5 |
| 에이전트 | 38.4 | -0.77 | 실측 | [[apex-agents]] 0.7%×1.0, [[gdpval]] 347.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 10.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.8 | -0.42 | 실측 | [[aa-lcr]] 34.7%×1.0 |
| 지시 따르기 | 64.0 | +0.93 | 실측 | [[ifbench]] 65.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
