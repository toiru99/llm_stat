---
type: Model
title: DeepSeek V4 Pro (high)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.7345
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 73.3, z: 1.29, r: 69.4, estimated: false }  # 전문 지식
  reasoning: { s: 56.0, z: 1.04, r: 65.5, estimated: false }  # 추론
  coding: { s: 63.2, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 69.5, z: 0.79, r: 61.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.36, r: 70.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V4 Pro (high)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.6 · 출력 $3.2 · 혼합 $0.7345/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.4 | +1.29 | 실측 | [[gpqa-diamond]] 90.5051%×0.4, [[humanitys-last-exam]] 35.2178%×0.3 |
| 추론 | 65.5 | +1.04 | 실측 | [[critpt]] 10%×1.0, [[gpqa-diamond]] 90.5051%×1.0, [[humanitys-last-exam]] 35.2178%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[terminal-bench]] 41.6667%×0.5 |
| 에이전트 | 61.8 | +0.79 | 실측 | [[gdpval]] 1159.86 Elo×1.0, [[tau2-bench]] 94.152%×1.0, [[tau3-banking]] 26.1856%×1.0, [[terminal-bench]] 41.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 70.3333%×1.0 |
| 지시 따르기 | 70.4 | +1.36 | 실측 | [[ifbench]] 71.2925%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
