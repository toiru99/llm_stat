---
type: Model
title: GPT-5.1 Codex mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 168.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.3, z: 0.43, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 0.44, r: 56.5, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.43, r: 56.4, estimated: false }  # 코딩
  agentic: { s: 50.0, z: 0.54, r: 58.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.69, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.1, r: 66.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GPT-5.1 Codex mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 168.0 t/s · TTFT 12.85s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.5 | +0.43 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 56.5 | +0.44 | 실측 | [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 56.4 | +0.43 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 58.1 | +0.54 | 실측 | [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.3 | +0.69 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 66.4 | +1.1 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
