---
type: Model
title: Gemma 3n E4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.1, z: -1.55, r: 26.8, estimated: false }  # 전문 지식
  reasoning: { s: 9.2, z: -1.3, r: 30.6, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.23, r: 31.5, estimated: false }  # 코딩
  agentic: { s: 2.8, z: -1.45, r: 28.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 15.7, z: -2.84, r: 7.4, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 22.2, z: -1.32, r: 30.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemma 3n E4B

Google · Open · Small · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.8 | -1.55 | 실측 | [[gpqa-diamond]] 29.5959595959596%×0.4, [[humanitys-last-exam]] 4.49490268767377%×0.3 |
| 추론 | 30.6 | -1.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 29.5959595959596%×1.0, [[humanitys-last-exam]] 4.49490268767377%×1.0 |
| 코딩 | 31.5 | -1.23 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 28.3 | -1.45 | 실측 | [[tau2-bench]] 4.97076023391813%×1.0, [[tau3-banking]] 0.206185567010309%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 7.4 | -2.84 | 실측 | [[mmmu-pro]] 26.242774566473997%×1.0 |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 30.2 | -1.32 | 실측 | [[ifbench]] 27.891156462585%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
