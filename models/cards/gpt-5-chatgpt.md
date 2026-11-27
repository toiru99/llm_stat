---
type: Model
title: GPT-5 (ChatGPT)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.1, z: -0.23, r: 46.6, estimated: false }  # 전문 지식
  reasoning: { s: 37.8, z: 0.13, r: 52.0, estimated: false }  # 추론
  coding: { s: 19.5, z: -0.73, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 9.8, z: -1.32, r: 30.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.3, z: 0.48, r: 57.2, estimated: false }  # 긴문맥
  instruction: { s: 46.2, z: -0.18, r: 47.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (ChatGPT)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-5 (ChatGPT)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.6 | -0.23 | 실측 | [[gpqa-diamond]] 68.5859%×0.4, [[humanitys-last-exam]] 6.62651%×0.3 |
| 추론 | 52.0 | +0.13 | 실측 | [[gpqa-diamond]] 68.5859%×1.0, [[humanitys-last-exam]] 6.62651%×1.0 |
| 코딩 | 39.1 | -0.73 | 실측 | [[terminal-bench]] 12.8788%×0.5 |
| 에이전트 | 30.2 | -1.32 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 12.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.2 | +0.48 | 실측 | [[aa-lcr]] 65%×1.0 |
| 지시 따르기 | 47.4 | -0.18 | 실측 | [[ifbench]] 45.034%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
