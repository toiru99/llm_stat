---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 58.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 64.9, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 61.4, z: 0.71, r: 60.6, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.69, r: 60.4, estimated: false }  # 코딩
  agentic: { s: 46.5, z: 0.42, r: 56.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.5, r: 57.5, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.09, r: 66.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 58.0 t/s · TTFT 3.53s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 60.6 | +0.71 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 60.4 | +0.69 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 56.4 | +0.42 | 실측 | [[gdpval]] 993.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.5 | +0.5 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 66.4 | +1.09 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
