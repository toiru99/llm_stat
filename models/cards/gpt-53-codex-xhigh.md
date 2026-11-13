---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: None
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.2, z: 1.5, r: 72.4, estimated: false }  # 전문 지식
  reasoning: { s: 75.5, z: 1.57, r: 73.5, estimated: false }  # 추론
  coding: { s: 80.4, z: 1.42, r: 71.3, estimated: false }  # 코딩
  agentic: { s: 80.4, z: 1.54, r: 73.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 93.9, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 88.9, z: 1.54, r: 73.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.4 | +1.5 | 실측 | [[gpqa-diamond]] 91.5%×0.4, [[humanitys-last-exam]] 42.5%×0.3 |
| 추론 | 73.5 | +1.57 | 실측 | [[gpqa-diamond]] 91.5%×1.0, [[humanitys-last-exam]] 42.5%×1.0 |
| 코딩 | 71.3 | +1.42 | 실측 | [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 73.0 | +1.54 | 실측 | [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 83.3%×1.0 |
| 지시 따르기 | 73.1 | +1.54 | 실측 | [[ifbench]] 75.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
