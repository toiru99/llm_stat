---
type: Model
title: DeepSeek R1 Distill Qwen 14B
creator: DeepSeek
license: Open
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 14
is_reasoning: true
radar:
  knowledge: { s: 28.3, z: -0.59, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 40.0, z: -0.27, r: 46.0, estimated: false }  # 코딩
  agentic: { s: 14.3, z: -0.85, r: 37.2, estimated: true }  # 에이전트
  trust: { s: 34.5, z: 0.32, r: 54.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.2, z: -1.17, r: 32.4, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.59, r: 26.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# DeepSeek R1 Distill Qwen 14B

DeepSeek · Open · Small(14B) · 컨텍스트 128k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.59 | 실측 | [[gpqa-diamond]] 48.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[gpqa-diamond]] 48.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 46.0 | -0.27 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 37.2 | -0.85 | 추정 | (추정) |
| 신뢰성 | 54.8 | +0.32 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.4 | -1.17 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 26.2 | -1.59 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
